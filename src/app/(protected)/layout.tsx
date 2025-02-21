import IndexFooter from "@/components/IndexFooter";
import IndexHeader from "@/components/IndexHeader"

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <IndexHeader/>
      <main>{children}</main>
      <IndexFooter/>
    </>
  );
}
