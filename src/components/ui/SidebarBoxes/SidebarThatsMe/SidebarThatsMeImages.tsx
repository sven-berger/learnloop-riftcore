import Image from "../../../Image";

export default function SidebarThatsMeImages() {
  return (
    <>
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
    </>
  );
}
