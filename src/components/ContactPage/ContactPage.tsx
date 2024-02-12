import { ContactPageProps } from "@/interfaces";
import React from "react";

type TContact = {
  props: ContactPageProps;
};

const ContactPage: React.FC<TContact> = ({ props }) => {
  const {
    title,
    subTitle,
    location,
    contactDetails: { phone, email },
    hours,
  } = props;

  return (
    <div className="flex-column font-light w-[75%] rounded-xl bg-black/50 justify-center p-4 ">
      <div className="text-4xl text-center text-light pt-10">{title}</div>
      <div className="text-xl  text-center text-light pt-4">{subTitle}</div>

      <div className="w-[75%] text-2xl text-left text-light pt-16">
        {location.title} {location.address}
      </div>
      <div className="w-[75%] text-2xl text-left text-light pt-2">
        {phone.title} {phone.number}
      </div>
      <div className="w-[75%] text-2xl text-left text-light pt-2">
        {email.title} {email.address}
      </div>

      <div className="w-[75%] text-2xl text-left text-light pt-16">
        {hours.title}
        <div className="w-[75%] text-xl text-left text-light pt-2">
          Weekdays: {hours.schedule.weekdays}
        </div>
        <div className="w-[75%] text-xl text-left text-light pt-2">
          Saturday: {hours.schedule.saturday}
        </div>
        <div className="w-[75%] text-xl text-left text-light pt-2">
          Sunday: {hours.schedule.sunday}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
