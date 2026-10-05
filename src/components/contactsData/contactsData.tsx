import { FC } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import styles from './contactsData.module.scss'
import { ContactsDataProps, ContactInfoItem } from './contactsData.types'

// Импортируем иконки (пути могут отличаться)
import PhoneIcon from '@icons/contacts/phone.svg'
import MailIcon from '@icons/contacts/mail.svg'
import ClockIcon from '@icons/contacts/clock.svg'
import VkIcon from '@icons/contacts/vk.svg' // Пример иконки VK

// Пример данных по умолчанию (лучше передавать снаружи)
const defaultContactItems = [
  { id: 'phone', label: 'Телефон', value: '+7 (915) 230-65-49', Icon: PhoneIcon, url: 'tel:+79152306549' },
  { id: 'hours', label: 'Режим работы', value: '9:00 - 18:00', Icon: ClockIcon },
  { id: 'mail', label: 'Почта', value: 'info@kim.agency', Icon: MailIcon, url: 'mailto:info@kim.agency' },
  { id: 'social', label: 'Социальные сети', value: 'ВКонтакте', Icon: VkIcon, url: 'https://vk.com/kkimagency' },
];

const defaultCompanyDetails = {
  label: 'Реквизиты компании',
  name: 'ИП Ким К.В.',
  inn: 'ИНН: 771379888609',
  ogrn: 'ОГРН: 319774600093229',
};

const ContactsData: FC<ContactsDataProps> = ({
  className,
  contactItems = defaultContactItems,
  companyDetails = defaultCompanyDetails,
}) => {
  const rootClassName = classNames(styles.root, className)

  const renderValue = (item: ContactInfoItem) => {
    if (item.url) {
      return <Link href={item.url} className={styles.valueLink}>{item.value}</Link>;
    }
    return <span className={styles.value}>{item.value}</span>;
  };

  return (
    <div className={rootClassName}>
      {/* Левая и центральная колонки с контактами */}
      {contactItems.map((item) => (
        <div key={item.id} className={styles.contactItem}>
          <p className={styles.label}>{item.label}</p>
          <div className={styles.valueContainer}>
            <item.Icon className={styles.icon} />
            {renderValue(item)}
          </div>
        </div>
      ))}

      {/* Правая колонка с реквизитами */}
      <div className={styles.detailsItem}>
        <p className={styles.label}>{companyDetails.label}</p>
        <div className={styles.detailsContent}>
          <p>{companyDetails.name}</p>
          <p>{companyDetails.inn}</p>
          <p>{companyDetails.ogrn}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactsData
