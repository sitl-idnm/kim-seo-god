import { FC, SVGProps } from 'react';

export interface ReviewLink {
	id: number | string;
	url: string;
	Icon: FC<SVGProps<SVGSVGElement>>;
}

export interface MoreReviewsProps {
	className?: string;
	title?: string;
	links: ReviewLink[];
}
