import Image from "../../../Image";

export default function SidebarThatsMeImages() {
  return (
    <>
      <Image
        file="/images/sidebarImage1.webp"
        onClick={() => alert("ImageViewer wird demnächst integriert.")}
      />

      <Image
        file="/images/sidebarImage2.webp"
        onClick={() => alert("ImageViewer wird demnächst integriert.")}
      />
      <Image
        file="/images/sidebarImage3.webp"
        onClick={() => alert("ImageViewer wird demnächst integriert.")}
      />
    </>
  );
}
