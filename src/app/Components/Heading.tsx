export default function Heading({ children ,className}: { children: React.ReactNode,className?:string }) {
  return (
      <div className={` flex flex-col  font-bold relative bg-clip-text text-transparent  bg-gradient-to-b from-custom-blue to-custom-purple ${className}`}>
      {children}
    </div>
  );
}
