+++
title = "Notifications / Alerts"
toc = true
+++

{{< youtube W5YAaLLBKhQ >}}
- Live Regions 
	- Accessiblity Talks <https://www.youtube.com/watch?v=W5YAaLLBKhQ&feature=youtu.be>
	- Live Region Codepen <https://codepen.io/iankonlineada/pen/eYJwQBY>

## Aria Roles

1. alert
2. status

### Poor support

1. aria-atomic : what is read?
2. aria-relevant : when it is read
3. aria-busy : maybe don't read this? Wait until something else is done. Dependent on screen reader / user tech.

### No support

1. role="marquee"
2. role="timer"

## HTML <output>

- Scott O'Hara <https://www.scottohara.me/blog/2019/07/10/the-output-element.html>

## Types of live regions

1. Dynamic search bar - Don't want it to update to frequently. Should be ARIA-LIVE="polite"
	1. Solution: create live region that reads off numer of results after user has stopped typing for a few seconds

2. Toasts - High risk of going wrong for many users -- not just SR. Bad for zoom text users also.
	1. Toast should not time out / disappear unless there is an alternative way 

3. Feed and chat messages - role="log" plus aria-live="assertive/polite" aria-atomic="false" -- create seperate live region that updates with new messages. Wrapping whole region makes SR read out whole region instead of new messages.

## Adding live region to page

1. Adding to DOM with role="alert" is ok, doesn't work well with other roles
2. If updating, have the empty element in page, and push the updates into the region
3. Create a notification center where user can check notifications -- apps mostly

## Resources

- Notification tests <https://codepen.io/smhigley/pen/abOwGro>
