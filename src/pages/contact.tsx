import ContactPage from "@/components/ContactPage/ContactPage";
import PageContainer from "@/components/PageContainer/PageContainer";
import mock from "@/mock/mock.json";

const Contact = () => {
  return (
    <PageContainer>
      <ContactPage props={mock.contact} />
    </PageContainer>
  );
};

export default Contact;
