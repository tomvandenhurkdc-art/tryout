import React, { useMemo, useState } from 'react';

type StatusLevel = 'Healthy' | 'Watch' | 'High Risk';

type FinanceInputs = {
  timestamp: string;
  email: string;
  netMonthlyIncome: string;
  fixedMonthlyCosts: string;
  variableMonthlyExpenses: string;
  numberOfSubscriptions: string;
  subscriptionCosts: string;
  monthlySavings: string;
  savingsBuffer: string;
  debtInterestRate: string;
};

const baseInputs: FinanceInputs = {
  timestamp: '',
  email: '',
  netMonthlyIncome: '',
  fixedMonthlyCosts: '',
  variableMonthlyExpenses: '',
  numberOfSubscriptions: '',
  subscriptionCosts: '',
  monthlySavings: '',
  savingsBuffer: '',
  debtInterestRate: '',
};

const statusChipStyles: Record<StatusLevel, string> = {
  Healthy: 'bg-emerald-500/15 text-emerald-200 border-emerald-500/40',
  Watch: 'bg-amber-500/15 text-amber-200 border-amber-500/40',
  'High Risk': 'bg-rose-500/15 text-rose-200 border-rose-500/40',
};

const parseNumber = (value: string) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const formatPercent = (value: number) => (Number.isFinite(value) ? value.toFixed(1) : '0.0');

const formatMonths = (value: number) => (Number.isFinite(value) ? value.toFixed(1) : '0.0');

const classifyPercent = (
  value: number,
  healthyMax: number,
  watchMax: number,
  reverse = false,
): StatusLevel => {
  if (reverse) {
    if (value >= watchMax) return 'Healthy';
    if (value >= healthyMax) return 'Watch';
    return 'High Risk';
  }
  if (value <= healthyMax) return 'Healthy';
  if (value <= watchMax) return 'Watch';
  return 'High Risk';
};

const classifyBuffer = (value: number): StatusLevel => {
  if (value >= 6) return 'Healthy';
  if (value >= 3) return 'Watch';
  return 'High Risk';
};

const App: React.FC = () => {
  const [inputs, setInputs] = useState<FinanceInputs>(baseInputs);
  const [hasPaid, setHasPaid] = useState(false);

  const calculations = useMemo(() => {
    const income = parseNumber(inputs.netMonthlyIncome);
    const fixedCosts = parseNumber(inputs.fixedMonthlyCosts);
    const variableCosts = parseNumber(inputs.variableMonthlyExpenses);
    const subscriptionCosts = parseNumber(inputs.subscriptionCosts);
    const savings = parseNumber(inputs.monthlySavings);
    const buffer = parseNumber(inputs.savingsBuffer);

    const totalMonthlyOutgo = fixedCosts + variableCosts + subscriptionCosts;
    const fixedPercent = income ? (fixedCosts / income) * 100 : 0;
    const variablePercent = income ? (variableCosts / income) * 100 : 0;
    const subscriptionPercent = income ? (subscriptionCosts / income) * 100 : 0;
    const savingsPercent = income ? (savings / income) * 100 : 0;
    const bufferMonths = totalMonthlyOutgo ? buffer / totalMonthlyOutgo : 0;

    return {
      fixedPercent,
      variablePercent,
      subscriptionPercent,
      savingsPercent,
      bufferMonths,
    };
  }, [inputs]);

  const statuses = useMemo(() => {
    const fixedCosts = classifyPercent(calculations.fixedPercent, 50, 60);
    const variableSpending = classifyPercent(calculations.variablePercent, 30, 40);
    const subscriptions = classifyPercent(calculations.subscriptionPercent, 10, 15);
    const savings = classifyPercent(calculations.savingsPercent, 10, 20, true);
    const buffer = classifyBuffer(calculations.bufferMonths);

    const statusList = [fixedCosts, variableSpending, subscriptions, savings, buffer];
    const highRiskCount = statusList.filter((item) => item === 'High Risk').length;
    const watchCount = statusList.filter((item) => item === 'Watch').length;

    let overall: StatusLevel = 'Healthy';
    if (highRiskCount >= 2 || (highRiskCount === 1 && watchCount >= 2)) {
      overall = 'High Risk';
    } else if (highRiskCount === 1 || watchCount >= 2) {
      overall = 'Watch';
    }

    return {
      fixedCosts,
      variableSpending,
      subscriptions,
      savings,
      buffer,
      overall,
    };
  }, [calculations]);

  const handleChange = (key: keyof FinanceInputs) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const payLink = 'https://www.paypal.com/paypalme/TomvandenHurk4';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,64,175,0.35),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(148,163,184,0.15),_transparent_55%)]" />
        <header className="relative z-10 border-b border-slate-800/60">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">ClearSpend Audit</p>
              <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Trustworthy financial risk diagnostics for students
              </h1>
              <p className="mt-3 max-w-2xl text-slate-300">
                Enter your monthly finance snapshot to see how your fixed costs, spending, subscriptions, and
                savings compare to healthy benchmarks. This tool is diagnostic only and offers no advice.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/70 px-6 py-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Overall Risk Level</p>
              <p
                className={`mt-2 inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium ${
                  statusChipStyles[statuses.overall]
                }`}
              >
                {statuses.overall}
              </p>
              <p className="mt-3 text-xs text-slate-400">Calculated from your inputs.</p>
            </div>
          </div>
        </header>

        <main className="relative z-10 mx-auto grid max-w-6xl gap-8 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/60">
            <div>
              <h2 className="text-xl font-semibold text-white">Student finance inputs</h2>
              <p className="mt-2 text-sm text-slate-400">
                All values are monthly unless stated otherwise. Percentages and buffer months are calculated
                automatically for you.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                Timestamp
                <input
                  type="text"
                  value={inputs.timestamp}
                  onChange={handleChange('timestamp')}
                  placeholder="2024-12-01 09:00"
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-blue-400 focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Email
                <input
                  type="email"
                  value={inputs.email}
                  onChange={handleChange('email')}
                  placeholder="student@email.com"
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-blue-400 focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Net monthly income
                <input
                  type="number"
                  value={inputs.netMonthlyIncome}
                  onChange={handleChange('netMonthlyIncome')}
                  placeholder="2100"
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-blue-400 focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Fixed monthly costs
                <input
                  type="number"
                  value={inputs.fixedMonthlyCosts}
                  onChange={handleChange('fixedMonthlyCosts')}
                  placeholder="980"
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-blue-400 focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Variable monthly expenses
                <input
                  type="number"
                  value={inputs.variableMonthlyExpenses}
                  onChange={handleChange('variableMonthlyExpenses')}
                  placeholder="520"
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-blue-400 focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Number of subscriptions
                <input
                  type="number"
                  value={inputs.numberOfSubscriptions}
                  onChange={handleChange('numberOfSubscriptions')}
                  placeholder="5"
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-blue-400 focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Subscription costs
                <input
                  type="number"
                  value={inputs.subscriptionCosts}
                  onChange={handleChange('subscriptionCosts')}
                  placeholder="44"
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-blue-400 focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Monthly savings
                <input
                  type="number"
                  value={inputs.monthlySavings}
                  onChange={handleChange('monthlySavings')}
                  placeholder="220"
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-blue-400 focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Savings / buffer
                <input
                  type="number"
                  value={inputs.savingsBuffer}
                  onChange={handleChange('savingsBuffer')}
                  placeholder="1800"
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-blue-400 focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Debt interest rate (%)
                <input
                  type="number"
                  value={inputs.debtInterestRate}
                  onChange={handleChange('debtInterestRate')}
                  placeholder="4"
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-blue-400 focus:outline-none"
                />
              </label>
            </div>
          </section>

          <section className="space-y-6">
            <div className="rounded-3xl border border-blue-500/30 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/60">
              <h2 className="text-xl font-semibold text-white">Unlock your audit</h2>
              <p className="mt-2 text-sm text-slate-300">
                The risk assessment is available after payment. Click the button below to complete payment on
                PayPal, then return and confirm you have paid to view the results.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={payLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                  onClick={() => setHasPaid(true)}
                >
                  Pay with PayPal
                </a>
                <button
                  type="button"
                  onClick={() => setHasPaid(true)}
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
                >
                  I have paid — show results
                </button>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                This is a diagnostic audit only. No recommendations or planning are provided.
              </p>
            </div>

            {hasPaid ? (
              <>
                <div className="rounded-3xl border border-slate-800/70 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/60">
                  <h2 className="text-xl font-semibold text-white">Risk assessment results</h2>
                  <p className="mt-2 text-sm text-slate-400">
                    The status labels reflect whether each area sits in a healthy range, needs attention, or sits
                    at elevated risk based on typical student benchmarks.
                  </p>

                  <div className="mt-6 grid gap-4">
                    {[
                      { label: 'Fixed costs status', value: statuses.fixedCosts },
                      { label: 'Variable spending status', value: statuses.variableSpending },
                      { label: 'Subscription status', value: statuses.subscriptions },
                      { label: 'Savings status', value: statuses.savings },
                      { label: 'Buffer status', value: statuses.buffer },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between rounded-2xl border border-slate-800/70 bg-slate-950/60 px-5 py-4"
                      >
                        <span className="text-sm text-slate-300">{item.label}</span>
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-medium ${
                            statusChipStyles[item.value]
                          }`}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-800/70 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/60">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Report</p>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        MONTHLY STUDENT FINANCE AUDIT
                      </h3>
                      <p className="text-sm text-slate-400">by ClearSpend Audit</p>
                    </div>
                    <div className="text-right text-xs text-slate-400">December 1899</div>
                  </div>

                  <div className="mt-6 space-y-4 text-sm text-slate-200">
                    <p>Personal financial overview — diagnostic only</p>
                    <div className="grid gap-2 text-slate-300">
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="font-medium text-slate-100">{inputs.email || '—'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Overall Risk Level:</span>
                        <span className="font-medium text-slate-100">{statuses.overall}</span>
                      </div>
                    </div>

                    <div className="space-y-2 rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-4 text-slate-300">
                      <div className="flex justify-between">
                        <span>Fixed Costs:</span>
                        <span>
                          {statuses.fixedCosts} ({formatPercent(calculations.fixedPercent)}%)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Variable Spending:</span>
                        <span>
                          {statuses.variableSpending} ({formatPercent(calculations.variablePercent)}%)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Subscriptions:</span>
                        <span>
                          {statuses.subscriptions} ({inputs.subscriptionCosts || '0'}, {inputs.numberOfSubscriptions || '0'} subs)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Savings:</span>
                        <span>
                          {statuses.savings} ({formatPercent(calculations.savingsPercent)}%)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Emergency Buffer:</span>
                        <span>
                          {statuses.buffer} ({formatMonths(calculations.bufferMonths)} months)
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400">
                      This audit provides an objective snapshot of your current financial situation. It is not
                      financial advice and does not include recommendations or planning.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-3xl border border-slate-800/70 bg-slate-900/70 p-8 text-sm text-slate-400 shadow-xl shadow-slate-950/60">
                Results are locked until payment is confirmed.
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
