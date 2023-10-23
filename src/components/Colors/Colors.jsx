import Display from "../Display/Display";
import SmallBox from "../SmallBox/SmallBox";
import styles from "./Colors.module.css";
import { useState } from "react";
import { colorsName, defaultColors } from "./color.js";

const Colors = () => {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");

  const clickHandler = (color) => {
    setColor(color);
  };

  const [colors1, setColors1] = useState(defaultColors);
  const deleteButtonHandler = (index) => {
    setColors1((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };
  const smallBoxes = colors1.map((shade, index) => {
    return (
      <SmallBox
        index={index}
        key={index}
        color={shade}
        clickHandler={clickHandler}
        deleteButtonHandler={deleteButtonHandler}
      />
    );
  });

  const buttonClickHandler = () => {
    const name11 = name.trim();
    const name1 = name11.toLowerCase();
    if (name1.length === 0) {
      alert("Enter valid color name");
    } else if (colorsName.includes(name1) === false) {
      alert("This color is not supported ");
      setName("");
    } else if (colors1.includes(name1) === true) {
      alert("Color already exist");
      setName("");
    } else {
      setColors1((current) => [...current, name1]);
      setName("");
    }
  };

  return (
    <>
      <div className={styles.head} style={{ color: color }}>
        Your Color is :{color}
      </div>
      <div className={styles.addColor}>
        Add your color :
        <input
          type="text"
          placeholder="Enter color"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <button onClick={buttonClickHandler}>Add Color</button>
      </div>

      <Display style={{ backgroundColor: color }} />
      <div className={styles.align}>{smallBoxes}</div>
      <div className={styles.supported}>
        <p>
          <h3>Supported Colors:</h3>
          <p>
            AliceBlue, Aqua, Aquamarine, Azure, Beige, Bisque, Black
            ,BlanchedAlmond Blue, BlueViolet, Brown, BurlyWood ,CadetBlue,
            Chartreuse, Chocolate ,Coral CornflowerBlue ,Cornsilk ,Crimson,
            Cyan, DarkBlue ,DarkCyan, DarkGoldenRod, DarkOrange ,DarkOrchid
            ,DarkRed, DarkSalmon ,DarkSeaGreen, DarkSlateBlue, DarkSlateGray,
            DarkSlateGrey, DarkTurquoise, DarkViolet, DeepPink, DeepSkyBlue
            ,DimGray ,DimGrey, DodgerBlue, FireBrick, FloralWhite, ForestGreen,
            Fuchsia ,Gainsboro, GhostWhite ,Gold ,GoldenRod ,Gray, Grey, Green
            ,GreenYellow, HoneyDew ,HotPink, IndianRed, Indigo ,Ivory, Khaki,
            Lavender ,LavenderBlush ,LawnGreen ,LemonChiffon ,LightBlue,
            LightCoral, LightCyan ,LightGoldenRodYellow ,LightGray, LightGrey
            ,LightGreen, LightPink, LightSalmon ,LightSeaGreen, LightSkyBlue
            ,LightSlateGray, LightSlateGrey ,LightSteelBlue, LightYellow ,Lime
            ,LimeGreen ,Linen, Magenta, Maroon, MediumAquaMarine, MediumBlue
            ,MediumOrchid ,MediumPurple, MediumSeaGreen ,MediumSlateBlue,
            MediumSpringGreen ,MediumTurquoise, MediumVioletRed, MidnightBlue,
            MintCream ,MistyRose ,Moccasin, NavajoWhite ,Navy, OldLace, Olive
            ,OliveDrab, Orange ,OrangeRed, Orchid, PaleGoldenRod, PaleGreen,
            PowderBlue, Purple, RebeccaPurple ,Red, RosyBrown ,RoyalBlue
            ,SaddleBrown ,Salmon, SandyBrown, SeaGreen, SeaShell, Sienna,
            Silver, SkyBlue, SlateBlue ,SlateGray, SlateGrey, Snow, SpringGreen,
            SteelBlue ,Tan, Teal ,Thistle ,Tomato ,Turquoise, Violet Wheat,
            White, WhiteSmoke ,Yellow, YellowGreen.
          </p>
        </p>
      </div>
    </>
  );
};
export default Colors;
