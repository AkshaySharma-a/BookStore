type Props = {
  children: React.ReactNode;
  extraClass?: string;
};

export default function CommonCard({ children, extraClass }: Props) {
  return (
    <div
      className={`w-full max-w-sm rounded-lg dark:bg-gray-900 shadow-lg shadow-blue-500/50 dark:shadow-blue-300 
      transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl 
      hover:shadow-blue-500/60 dark:hover:shadow-amber-200 border border-blue-300 hover:border-white p-6 ${extraClass}`}
    >
      {children}
    </div>
  );
}
