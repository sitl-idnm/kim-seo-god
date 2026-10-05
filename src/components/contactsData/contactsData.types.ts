import { FC, SVGProps } from 'react';

// Элемент контактной информации (Телефон, Почта, Режим работы, Соц. сеть)
export interface ContactInfoItem {
  id: string | number;
  label: string;
  value: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  url?: string; // Опционально для ссылок (телефон, почта, соц. сеть)
}

// Реквизиты компании
export interface CompanyDetails {
  label: string;
  name: string;
  inn: string;
  ogrn: string;
}

// Пропсы основного компонента
export interface ContactsDataProps {
  className?: string;
  contactItems?: ContactInfoItem[];
  companyDetails?: CompanyDetails;
}
