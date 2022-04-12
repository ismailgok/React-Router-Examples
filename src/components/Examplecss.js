import style from "./ExampleCss.module.css";

const Example = () => {
  const data = [
    {
      text: "ahmet",
      status: "danger",
    },
    {
      text: "mehmet",
      status: "success",
    },
    {
      text: "fatih",
      status: "primary",
    },
  ];

  return (
    <div className={style.container}>
      <div>
        {data.map((item, index) => (
          <div key={index} className={style[item.status]}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Example;
