
// custom component banaisi tai title r subtitle props er moto call korsi
const Heading = ({title,subTitle}) => {
    return (
        <div>
            <h1 className="text-center text-4xl mt-5 ">{title}</h1>
            <p className="text-center mt-3">{subTitle}</p>
        </div>
    );
};

export default Heading;