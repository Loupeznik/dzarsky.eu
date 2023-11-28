import { FiGithub } from "react-icons/fi";
import styled from "styled-components";

const year = new Date().getFullYear();

const StyledFooter = styled.footer`
    display: flex;
    gap: 1rem;
    align-items: center;
    color: white;
    margin-top: auto;
    place-content: space-between;
`;

const RepoLink = styled.a`
    text-decoration: none;
    color: white;
    opacity: 0.8;

    &:hover {
        opacity: 1;
        color: rgb(var(--accent-light));
    }
`;

export const Footer = () => {
  return (
<StyledFooter>
  <p>&copy; {year}, Dominik Zarsky</p>
  <RepoLink href="https://github.com/Loupeznik/dzarsky.eu" target="_blank"><FiGithub /> Source code</RepoLink>
</StyledFooter>
  );
}
