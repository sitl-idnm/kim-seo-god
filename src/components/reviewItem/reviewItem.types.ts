import { FC, SVGProps } from 'react';

export interface ReviewItemProps {
  className?: string
  avatar: string
  name: string
  position: string
  reviewText: string
  companyLogo?: FC<SVGProps<SVGSVGElement>>
  companyUrl?: string
  companyLinkText?: string
  originalReviewUrl?: string
  buttonText?: string
  serviceCategoryIds?: (string | number)[]
  themeIds?: (string | number)[]
}
