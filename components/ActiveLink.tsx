import Link from "next/link";
import { withRouter, Router } from "next/router";

const ActiveLink: React.FunctionComponent<{ href: string; router: Router }> = ({
  children,
  router,
  href
}) => {
  return (
    <Link href={href}>
      <a>
        {children}

        <style jsx>{`
          a {
            font-size: 1.4rem;
            transistion: color 0.2s ease;
            color: ${router.pathname === href ? "white" : "#999"};
          }

          a:hover {
            color: white;
          }
        `}</style>
      </a>
    </Link>
  );
};

export default withRouter(ActiveLink);
