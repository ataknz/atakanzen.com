const pageview = (url) => {
  window.gtag("config", process.env.GA_TRACKING_ID, {
    page_path: url,
  });
};

const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_labe: label,
    value: value,
  });
};

export { pageview, event };
