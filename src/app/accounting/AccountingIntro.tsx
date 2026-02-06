import GridLayout from "../../components/layout/GridLayout";
import OverallBalance from "./OverallBalance";
import PostingForm from "./PostingForm";

export default function AccountingIntro() {
  return (
    <>
      <GridLayout cols={2}>
        <PostingForm />
        <OverallBalance />
      </GridLayout>
    </>
  );
}
