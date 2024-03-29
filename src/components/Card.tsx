import type React from 'react';
import styled from 'styled-components';

interface Props {
	title: string;
	body: string;
	blank?: boolean;
	href?: string;
	icon?: React.ReactNode;
}

const LinkCard = styled.li`
	list-style: none;
	display: flex;
	padding: 1px;
	background-color: #23262d;
	background-image: none;
	background-size: 400%;
	border-radius: 7px;
	background-position: 100%;
	transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
	box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);

	a {
		width: 100%;
		text-decoration: none;
		line-height: 1.4;
		padding: calc(1.5rem - 1px);
		border-radius: 8px;
		color: white;
		background-color: #23262d;
		opacity: 0.8;
	}

	&:hover {
		background-position: 0;
        background-image: var(--accent-gradient);
	}

	&:hover h2 {
		color: rgb(var(--accent-light));
	}
`;

const LinkCardTitle = styled.h2`
	margin: 0;
	font-size: 1.25rem;
	transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
`;

const LinkCardDescription = styled.p`
	margin-bottom: 0;
	margin-top: 0.5rem;
`;

export const Card = ({ title, body, href, icon, blank = true }: Props) => {
	return (
		<LinkCard>
			<a href={href} target={blank ? "_blank" : undefined}>
				<LinkCardTitle>
					{icon} {title}
				</LinkCardTitle>
				<LinkCardDescription>
					{body}
				</LinkCardDescription>
			</a>
		</LinkCard>
	);
}
