export default function TransactionCard() {
  return (
    <div className="flex items-center justify-between rounded-md border bg-card px-4 py-2">
      <div className="flex items-center gap-2">
        <div className="flex size-7 flex-col items-center justify-center rounded-full bg-primary p-2 md:size-10">
          <svg
            className="stroke-background"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 3 4 7l4 4" />
            <path d="M4 7h16" />
            <path d="m16 21 4-4-4-4" />
            <path d="M20 17H4" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-light">Transaction</p>
          <h3 className="text-sm md:text-base">Joel Kenley</h3>
        </div>
      </div>
      <p className="text-sm md:text-xl">-$68.00</p>
    </div>
  )
}
