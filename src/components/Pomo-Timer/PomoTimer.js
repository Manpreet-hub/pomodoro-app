import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./pomo-timer.css";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  MdOutlineReplay,
  MdPauseCircleFilled,
  MdPlayCircleFilled,
} from "react-icons/md";

const PomoTimer = () => {
  const location = useLocation();
  const { task } = location.state;
  const { time } = task;

  const [second, setSecond] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  const TimeIntervalId = useRef(null);
  const secondsRef = useRef(0);

  useEffect(() => {
    document.title = renderTimer() + " |Timer";
  });

  const startTimeHanlder = () => {
    if (TimeIntervalId.current) clearInterval(TimeIntervalId.current);

    TimeIntervalId.current = setInterval(() => {
      if (secondsRef.current === 0) {
        clearInterval(TimeIntervalId);
      } else {
        secondsRef.current--;
        setSecond(secondsRef.current);
        if (secondsRef.current === 0) alert("Task Completed !!");
      }
    }, 1000);
  };

  const pauseTimeHandler = () => {
    clearInterval(TimeIntervalId.current);
  };

  const restartTimeHandler = () => {
    setSecond(time * 60);
    secondsRef.current = time * 60;
    clearInterval(TimeIntervalId.current);
  };

  useEffect(() => {
    setSecond(time * 60);
    secondsRef.current = time * 60;
    console.log(secondsRef);
  }, [time]);

  let totalSeconds = time * 60;
  const renderTimer = () => {
    const remainingSeconds = second % 60;
    const remainingMinutes = Math.floor(second / 60);
    return `${remainingMinutes}m:${remainingSeconds}`;
  };

  const progressValue = (second / totalSeconds) * 100;
  return (
    <div className="pomo-timer-main dark-theme">
      <div className="pomo-progress-bar">
        <div className="progress-bar">
          <CircularProgressbar
            value={progressValue}
            text={renderTimer()}
            counterClockwise={true}
            styles={{
              text: {
                fontSize: "1rem",
              },
            }}
          />
        </div>
        <div className="pomo-icons">
          <MdPauseCircleFilled title="Pause" onClick={pauseTimeHandler} />
          <MdPlayCircleFilled title="Start" onClick={startTimeHanlder} />
          <MdOutlineReplay title="Start" onClick={restartTimeHandler} />
        </div>
      </div>
      <div className="pomo-tasks">
        <h1 className="dark-theme">{task.title}</h1>
        <h3 className="dark-theme">{task.description}</h3>
        <p className="task-completed-info ">
          <Link to="/" className="dark-theme">
            Task Completed? Go Back to the Task List
          </Link>
        </p>
      </div>
    </div>
  );
};

export { PomoTimer };
