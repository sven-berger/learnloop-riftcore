import Box from "../../Box";
import H2 from "../../H2";
import Image from "../../Image";

export default function SidebarCounter() {
  return (
    <Box>
      <H2 style="mb-10 mt-6" text="Das bin ich" children={undefined} />
      <Image
        file="/images/sidebarImage1.jpg"
        onClick={() => alert("ImageViewer wird demnächst integriert.")}
      />

      <Image
        file="/images/sidebarImage2.jpg"
        onClick={() => alert("ImageViewer wird demnächst integriert.")}
      />
      <Image
        file="/images/sidebarImage3.png"
        onClick={() => alert("ImageViewer wird demnächst integriert.")}
      />
    </Box>
  );
}
