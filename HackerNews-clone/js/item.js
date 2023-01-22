import Story from "../components/Story";
import Comment from "../components/Comment";
import view from "../utils/view";
import baseUrl from "../utils/baseUrl";

export default function Item() {
    let story= null;
    let hasComments;
    let hasError = false;

    try {
        const story =  await getStory();
        const hasComments = story.comments.length  > 0;
    } catch(error){
        hasError= true;
        console.error(error);
    }

    if (hasError){
        view.innerHTML =  `<div class="error">Error fetching story</div>` ; 
    }

  view.innerHTML = `<div>
  ${Story(story)}
  </div>
  <hr/>>
  ${hasComments ? story.comments.map(comment => Comment(comment)).join('') : 'No comments'}
  `;
}

async function getStory() {
  const storyId = window.location.hash("?id=")[1];
  const response = await fetch(`${baseUrl}/item/${storyId}`)
  const story = response.json();
  return story;

}
