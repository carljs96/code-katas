// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples

const generateHashtag = (str) =>
  ((tag) => (tag.length > 140 || tag === "#" ? false : tag))(
    `#${str
      .split(" ")
      .filter((x) => x.trim() !== "")
      .map((x) => x[0].toUpperCase() + x.slice(1))
      .join("")}`
  );

module.exports = generateHashtag;
