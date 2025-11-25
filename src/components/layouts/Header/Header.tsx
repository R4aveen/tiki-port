import classNames from "classnames";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

export default function Header({ minimal = false }: { minimal?: boolean }) {
  const classes = classNames(
    "z-30 flex w-full flex-wrap items-center justify-between gap-4 rounded-2xl border border-zinc-200/70 bg-white/70 px-5 py-4 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/60",
    {
      "border-none bg-transparent px-0 py-0 shadow-none": minimal,
    }
  );

  return (
    <header className={classes}>
      <HeaderLeft />
      <HeaderRight />
    </header>
  );
}
