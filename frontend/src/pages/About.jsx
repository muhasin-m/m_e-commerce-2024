import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt="Photo of cloths"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eos,
            numquam facilis consequatur, nesciunt ratione quibusdam dolores ad
            asperiores nihil voluptates harum optio necessitatibus quo quae
            repellendus fugit aliquid rerum.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            adipisci, non quaerat optio impedit quam error rem quis eos
            veritatis molestiae praesentium temporibus ducimus tempore dolorum
            minus asperiores corrupti. Possimus.
          </p>
          <b className="text-gray-800"> Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            ipsa. Dolorum libero pariatur adipisci molestiae veniam dicta
            excepturi possimus reiciendis modi repellendus, ipsum tempore. Vel,
            minima voluptas! Incidunt, harum id.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            vero dolore, quo quisquam hic temporibus ut voluptatem aliquid
            sapiente culpa dolorum totam illo expedita sit vel asperiores.
            Exercitationem, suscipit vero.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            vero dolore, quo quisquam hic temporibus ut voluptatem aliquid
            sapiente culpa dolorum totam illo expedita sit vel asperiores.
            Exercitationem, suscipit vero.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            vero dolore, quo quisquam hic temporibus ut voluptatem aliquid
            sapiente culpa dolorum totam illo expedita sit vel asperiores.
            Exercitationem, suscipit vero.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};
export default About;
