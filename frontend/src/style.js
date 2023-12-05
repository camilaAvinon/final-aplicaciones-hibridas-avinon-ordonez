const styles = {
    boxWidth: " w-full",
  
    heading2: "font-poppins font-semibold xs:text-[32px] text-primary leading-10 w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    labels: "rounded-xl border border-tertiary flex justify-center items-center",
  
    btnFocus: "text-tertiary hover:text-primary border border-tertiary hover:bg-tertiary rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3",
    
    btnUnFocus: "text-gray-900 border border-transparent hover:border-extra bg-white focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3",

    paddingX: "sm:px-8 px-4",
    paddingY: "sm:py-8 py-6",
    padding: "sm:px-10 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-8 mx-4",
    marginY: "sm:my-6 my-6",
    margin: "sm:px-10 mx-6 sm:my-12 my-4"
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexCenter} flex-col`,
  };
  
  export default styles;