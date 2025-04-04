import Container from "@/components/Container/Container";
import PageTitle from "@/components/PageTitle/PageTitle";

const SaleDetail = ({ params } : { params: { id: number }}) => {
  const { id } = params;

  return (
    <Container>
      <PageTitle>Sale {id} Detail</PageTitle>
    </Container>
  );
}

export default SaleDetail;