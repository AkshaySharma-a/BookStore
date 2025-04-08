import Link from "next/link";
import ProfilePic from "../profilPic";

type CommonHeaderProps = {
  logoHref?: string;
};

export default function CommonHeader({ logoHref = "#" }: CommonHeaderProps) {
  const islogin = false;
  return (
    <>
      <div className="bg-linear-to-bl from-gray-900 to-blue-100">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12"></div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  {islogin &&
                    [
                      "About",
                      "Careers",
                      "History",
                      "Services",
                      "Projects",
                      "Blog",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                          href="#"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-teal-500"
                    href="/login"
                  >
                    Login
                  </Link>
                  <div className="hidden sm:flex">
                    <Link
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                      href="/register"
                    >
                      Register
                    </Link>
                  </div>
                </div>
                <div>
                  {
                    <ProfilePic
                      src=""
                      alt="User 3"
                      size={50}
                      isLoading={false}
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
