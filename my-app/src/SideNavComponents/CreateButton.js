function CreateButton(props) {
  if (
    (props.currentAnswers[props.id] == null ||
      props.currentAnswers[props.id] == undefined) &&
    props.reviewQuestions[props.id] == false
  ) {
    return (
      <button
        onClick={props.handleClick}
        id={props.id}
        className="sideNavButton"
      >
        Q{props.id + 1}
      </button>
    );
  } else if (
    (props.currentAnswers[props.id] == null ||
      props.currentAnswers[props.id] == undefined) &&
    props.reviewQuestions[props.id] == true
  ) {
    return (
      <button id={props.id} className="sideNavButtonToBeReviewed">
        Q{props.id + 1}
      </button>
    );
  } else if (
    props.currentAnswers[props.id] != null &&
    props.currentAnswers[props.id] != undefined &&
    props.reviewQuestions[props.id] == false
  ) {
    return (
      <button id={props.id} className="sideNavButtonAnswered">
        Q{props.id + 1}
      </button>
    );
  } else {
    return (
      <button id={props.id} className="sideNavButtonAnsweredAndReview">
        Q{props.id + 1}
      </button>
    );
  }
}
export default CreateButton;
