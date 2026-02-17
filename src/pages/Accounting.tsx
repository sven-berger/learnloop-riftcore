import AccountingIntro from "../app/accounting/AccountingIntro";
import GitHub from "../components/GitHub";
import GridLayout from "../components/layout/GridLayout";

export default function Accounting() {
  return (
    <>
      <AccountingIntro />
      <GridLayout cols={4}>
        <GitHub name="Accounting" type="page" />
        <GitHub name="accounting/AccountingIntro" type="app" />
        <GitHub name="accounting/OverallBalance" type="app" />
        <GitHub name="accounting/PostingForm" type="app" />
      </GridLayout>
    </>
  );
}
