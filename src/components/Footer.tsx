import Image from "next/image";

export const Footer = () => (
  <footer className="flex gap-[24px] flex-wrap items-center justify-center">
    developped by
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://github.com/rafalkornel"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src="/github-mark.svg"
        alt="github icon"
        width={16}
        height={16}
      />
      @RafalKornel
    </a>
  </footer>
);
