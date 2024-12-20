import Matter, { Engine, Render, World, Bodies, Runner, Body } from "matter-js";
import { useRef, useEffect } from "react";
import { ballzData } from "../data/ballz";
import "../cssComp/f.css";
const width = 1000;
const height = 300;

function creatingBallz() {
  let ballz: Matter.Body[] = [];
  ballzData.forEach((ball) => {
    if (ball.shape == "c") {
      const circle = Bodies.circle(width / 2, height / 2, 50, {
        friction: 0,
        frictionAir: 0,
        frictionStatic: 0,
        render: {
          sprite: {
            texture: ball.img,
            xScale: 0.19,
            yScale: 0.19,
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
      const square = Bodies.rectangle(width / 2, height / 2, 70, 70, {
        friction: 0,
        frictionAir: 0,
        frictionStatic: 0,
        render: {
          sprite: {
            texture: ball.img,
            xScale: 0.15,
            yScale: 0.15,
          },
        },
      });

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
  const colorWalls = "white";
  const scene = useRef<HTMLDivElement>(null);
  const engine = useRef(Engine.create());

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
        width: width,
        height: height,
        wireframes: false,
        background: "#ffffff",
      },
    });

    const mouse = Mouse.create(render.canvas);

    const options = {
      mouse: mouse,
    };
    const mConstraint = MouseConstraint.create(currentEngine, options);

    // Add ground
    const ground = Bodies.rectangle(width / 2, height, width, 5, {
      isStatic: true,
      render: { fillStyle: colorWalls },
      friction: 0,
    });

    const rightGround = Bodies.rectangle(width, height / 2, 5, height, {
      isStatic: true,
      render: { fillStyle: colorWalls },
      friction: 0,
    });

    const leftGround = Bodies.rectangle(0, height / 2, 5, height, {
      isStatic: true,
      render: { fillStyle: colorWalls },
      friction: 0,
    });

    const ceiling = Bodies.rectangle(width / 2, 0, width, 5, {
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
      ...creatingBallz(),
    ]);

    // Run the engine and renderer
    const runner = Runner.create();
    Runner.run(runner, currentEngine);
    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(currentEngine.world, true);
      Engine.clear(currentEngine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div
      ref={scene}
      className="skills h-96 border-b-4 py-5  border-black w-full flex justify-center"
    />
  );
}
