import IndexHeader from "@/components/IndexHeader";

export default function CodingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <IndexHeader/>
      <main>{children}</main>
    </>
  );
}
