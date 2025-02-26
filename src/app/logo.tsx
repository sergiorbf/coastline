import Link from "next/link"

export function Logo() {
  return (
    <Link href="/home" className="flex gap-2 px-1 py-3">
      <div className="flex aspect-square size-10 items-center justify-center rounded-lg ">
        <svg
          width={38}
          height={38}
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className=""
        >
          <path
            className="stroke-black dark:stroke-zinc-100"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.696 3.866C15.098 2.366 11.5 2.598 10 5.196l3.464 2m4.232-3.33c2.598 1.5 4.196 4.732 2.696 7.33l-5.196-3m2.5-4.33l.5-.866m-.5.866c-1.821.488-2.982 1.165-4.232 3.33m4.232-3.33c.488 1.821.482 3.165-.768 5.33m-1.732-1l-1.732-1m1.732 1l-3 5.196M3 21l.88-1.056a2.001 2.001 0 013.139.08v0a2.001 2.001 0 003.107.118l.19-.218a2.236 2.236 0 013.367 0l.191.218c.838.957 2.344.9 3.107-.117v0a2.001 2.001 0 013.14-.08L21 21M6.708 16A7.97 7.97 0 0112 14a7.97 7.97 0 015.292 2"
          />
        </svg>
      </div>
      <div className="grid flex-1 text-left leading-tight text-xl text-zinc-900 dark:text-zinc-100">
        <span className="truncate font-semibold">
          Coastline
        </span>
      </div>
    </Link>
  )
}
