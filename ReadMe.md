# Clock
## Main Idea
1. design the surface
2. get the time, use transform to the corresponding pointer
3. switch digial clock and clock -> checkbox

## Method
1. top, left, transform : to make the content in the center \
 flex \
 absolute: admit as child, ignore siblings\
 before
2. new Date() \
querySelector: select the corresponding div \
make the pointer moves as the time -> style.transform, rotateZ
