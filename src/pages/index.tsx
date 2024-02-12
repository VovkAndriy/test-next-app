import HomePage from "@/components/HomePage";
import PageContainer from "@/components/PageContainer/PageContainer";
import mock from "@/mock/mock.json";

export default function Home() {
  return (
    <PageContainer>
      <HomePage home={mock.home} />
    </PageContainer>
  );
}
