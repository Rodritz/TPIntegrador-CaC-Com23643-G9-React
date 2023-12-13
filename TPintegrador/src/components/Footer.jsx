import Brand from "../img/svg/logo-no-background.svg";

export const Footer = () => {
  return (
    <footer className="d-flex justify-content-between align-items-center border-top bottom-0 left-0 w-100 px-5 align-self-end">
      <span className="text-white">&copy; 2023 CaC-Com23643-G9</span>

      <ul>
        <li>
          <a href="#">
            <img src={Brand} alt="Logo" width="120" height="120" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
