/**
 * Pandemic Time.
 *
 * Pretend that March 2020 never ended. Get the number of days after
 * March 31, 2020, and add that number to 31, to get a sarcastic "pandemic"
 * date of March XXXX, 2020.
 */

const PandemicDate = () => {
  // Get today's date and convert it to milliseconds.
  const today = new Date();
  const todayInMS = Date.parse( today );

  // Get the base date (March 31, 2020) in milliseconds.
  const marchInMS = Date.parse( 'March 31, 2020' );

  // Calculate the difference between the two dates and convert it to number
  // of days.
  // 1 day = 86400000 ms
  const difference = parseInt( (todayInMS - marchInMS) / 86400000 );

  // Today's pandemic date is March (31 + the difference).
  const todayDate = 31 + difference;

  // Display the pandemic date on the screen.
  document.getElementById( 'today-date' ).innerHTML = todayDate;
};

PandemicDate();
