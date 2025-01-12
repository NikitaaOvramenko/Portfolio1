import Matter, { Engine, Render, World, Bodies, Runner, Body } from "matter-js";
import { useRef, useEffect, useState } from "react";
import { ballzData } from "../data/ballz";
import useWindowDimensions from "../helpers/WindowHool";

function creatingBallz(width: number, height: number) {
  let ballz: Matter.Body[] = [];
  ballzData.forEach((ball) => {
    if (ball.shape == "c") {
      const circle = Bodies.circle(width / 2, height / 2, width / 20, {
        friction: 0,
        frictionAir: 0,
        frictionStatic: 0,
        render: {
          sprite: {
            texture: ball.img,
            xScale: width / 5263.157, //0.19 should be
            yScale: width / 5263.157,
          },
        },
      });
      Body.applyForce(
        circle,
        { x: circle.position.x, y: circle.position.y },
        { x: Math.random() * 0.02 - 0.01, y: Math.random() * 0.02 - 0.01 }
      );
      ballz.push(circle);
    } else if (ball.shape == "s") {
      const square = Bodies.rectangle(
        width / 2,
        height / 2,
        width / 14.27, //70
        width / 14.28,
        {
          friction: 0,
          frictionAir: 0,
          frictionStatic: 0,
          render: {
            sprite: {
              texture: ball.img,
              xScale: width / 6666.66, //0.15
              yScale: width / 6666.66,
            },
          },
        }
      );

      Body.applyForce(
        square,
        { x: square.position.x, y: square.position.y },
        { x: Math.random() * 0.02 - 0.01, y: Math.random() * 0.02 - 0.01 }
      );

      ballz.push(square);
    }
  });

  return ballz;
}

export default function Physics() {
  const colorWalls = "black";
  const scene = useRef<HTMLDivElement>(null);
  const engine = useRef(Engine.create());
  const { width: windowWidth } = useWindowDimensions();
  const [curWid, SetWid] = useState(1000);
  const [curHei, SetHei] = useState(280);

  const text = document.createElement("div");

  text.style.color = "yellow";

  useEffect(() => {
    if (windowWidth < 1000) {
      SetWid(500);
      SetHei(150);

      if (windowWidth < 500) {
        SetWid(350);
        SetHei(200);
      }
    } else {
      SetWid(1000);
      SetHei(280);
    }
  }, [windowWidth]);

  useEffect(() => {
    const currentScene = scene.current;
    const currentEngine = engine.current;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;

    currentEngine.gravity.scale = 0;

    // Create the renderer
    const render = Render.create({
      element: currentScene!,
      engine: currentEngine,
      options: {
        width: curWid,
        height: curHei,
        wireframes: false,
        background: "#000000",
      },
    });

    const mouse = Mouse.create(render.canvas);

    const options = {
      mouse: mouse,
    };
    const mConstraint = MouseConstraint.create(currentEngine, options);

    // Add ground
    const ground = Bodies.rectangle(curWid / 2, curHei, curWid, 5, {
      isStatic: true,
      render: { fillStyle: colorWalls },
      friction: 0,
    });

    const rightGround = Bodies.rectangle(curWid, curHei / 2, 5, curHei, {
      isStatic: true,
      render: { fillStyle: colorWalls },
      friction: 0,
    });

    const leftGround = Bodies.rectangle(0, curHei / 2, 5, curHei, {
      isStatic: true,
      render: { fillStyle: colorWalls },
      friction: 0,
    });

    const ceiling = Bodies.rectangle(curWid / 2, 0, curWid, 5, {
      isStatic: true,
      render: { fillStyle: colorWalls },
      friction: 0,
    });
    // Add the box and ground to the world

    World.add(currentEngine.world, [
      ground,
      leftGround,
      rightGround,
      ceiling,
      mConstraint,
      ...creatingBallz(curWid, curHei),
    ]);

    // Run the engine and renderer
    const runner = Runner.create();
    Runner.run(runner, currentEngine);
    Render.run(render);

    return () => {
      Render.stop(render);
      Matter.Composite.clear(currentEngine.world, false);
      Engine.clear(currentEngine);
      render.canvas.remove();
      render.textures = {};
      console.log("Cleanup triggered");
    };
  }, [curWid, curHei]);

  return (
    <>
      <div
        id="Skills"
        ref={scene}
        className="main skills  h-[250px] sm:h-[300px] 2xl:h-[600px]  border-b-2 py-5  border-white bg-black w-full flex justify-center items-center relative "
      >
        <div className=" absolute select-none text-white text-2xl md:text-6xl hover:text-yellow-200 duration-300 font-bold  ">
          Skills
        </div>
      </div>

      {/* <div>{useWindowDimensions().width}</div> */}
    </>
  );
}
