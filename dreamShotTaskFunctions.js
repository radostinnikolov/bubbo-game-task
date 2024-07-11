/**
 * This function returns the count of certain or all bubbles.
 * If you call the function without providing a color(getBubbleCount()), you will get the count of all bubbles on screen.
 * If you call the function with a color argument(use lowercase e.g. "green"), you will get the count of all bubbles with this color (getBubbleCount("green")).
 * @param {string} wantedColor 
 * @returns {number}
 */
function getBubbleCount(wantedColor="all"){
    let lines = window.bubbleGame.lines;
    let count = 0;
    let validColors = ['red', 'blue', 'green', 'yellow', 'timer', 'bomb', 'super']
    let colorIsValid = true;

    for (i in lines){
        if (colorIsValid){
            if (wantedColor === 'all'){
                count += lines[i].bubbleCount;
            } else {
                for (j in lines[i].bubbles){
                    if (lines[i].bubbles[j] === undefined){
                        continue;
                    }
                    if (lines[i].bubbles[j]._type === wantedColor){
                        count += 1;
                    } else {
                        if (validColors.includes(wantedColor)){
                            continue
                        } else {
                            console.log("Color is invalid!")
                            colorIsValid = false;
                            break
                        }
                        
                    }
                }
            }
        } else {
            break
        }
    }
    return count;
}

function getRenderedImagesCount(){
    let bubbles = window.bubbleGame.gridContainer.children;
    let textures = [];
    for(i in bubbles){
        textures.push(bubbles[i].children[0].children[1]._texture.textureCacheIds[0])
    }
    return textures.length;
}

function bonusPointsFunction(){
    let bubblesCount = getBubbleCount();
    let renderedImagesCount = getRenderedImagesCount();
    if (bubblesCount === renderedImagesCount){
        console.log(`Bubbles count and rendered images count are equal! - ${bubblesCount}`)
    } else {
        console.log("Bubbles count and rendered images count are not equal!")
    }
}

