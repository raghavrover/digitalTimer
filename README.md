In this project, I've built a **Digital Timer App** by using React JS.

### Aim

The aim of the project is to build a Digital Timer by using react class component state(private property) to capture any changes in the component

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/digital-timer-output.gif" alt="digital timer output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)" />
</div>
<br/>

### Design Files on Different Devices

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/digital-timer-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/digital-timer-lg-output.png)

</details>

### App Functionalities

<details>
<summary>Functionalities added</summary>
<br/>

The app has the following functionalities

- The default timer limit value is 25 minutes
- When the **Start** button is clicked,
  - The **Start** text will change to **Pause** text
  - The **play icon** will be replaced by **pause icon**
  - The **Timer** status will change to **Running**
  - The **Timer** will start running backwards from the timer limit value set
  - If the **Timer** has been paused after starting, it will resume from where it was paused
  - Both the **Plus** and **Minus** buttons will be disabled
- When the **Pause** button is clicked,
  - The **Pause** text will change to **Start** text
  - The **pause icon** will be replaced by **play icon**
  - The **Timer** will stop running backwards
  - The **Timer** status will change to **Paused**
  - Both the **Plus** and **Minus** buttons will be disabled
- When the button with the **Plus** symbol is clicked,
  - The timer limit value will be incremented by one minute
  - The **Timer** will display time with the increased timer limit value
- When the button with the **Minus** symbol is clicked,
  - The timer limit value will be decremented by one minute
  - The **Timer** will display time with the decreased timer limit value
- When the timer limit value is modified by clicking the **Plus** or **Minus** button and the **Start** button is clicked, then the **Timer** will start with the modified timer value
- When the **Timer** ends (displays **00:00**)
  - The **Pause** text will change to **Start** text
  - The **pause icon** will be replaced by **play icon**
  - The **Timer** will stop running backwards
  - The **Timer** status will change to **Paused**
- After completion of **Timer**, when the **Start** button is clicked,
  - The **Start** text will change to **Pause** text
  - The **play icon** will be replaced by **pause icon**
  - The **Timer** will start running backwards from the current timer limit value.
  - The **Timer** status will change to **Running**
- When the **Reset** button is clicked, then
  - The **Pause** text will change to **Start** text
  - The **pause icon** will be replaced by **play icon**
  - The **Timer** will stop running backwards
  - The **Timer** status will change to **Paused**
  - Initial **Timer** limit value will be displayed
  - Both the **Plus** and **Minus** buttons will be enabled

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png](https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png)
- [https://assets.ccbp.in/frontend/react-js/play-icon-img.png](https://assets.ccbp.in/frontend/react-js/play-icon-img.png)
- [https://assets.ccbp.in/frontend/react-js/pause-icon-img.png](https://assets.ccbp.in/frontend/react-js/pause-icon-img.png)
- [https://assets.ccbp.in/frontend/react-js/reset-icon-img.png](https://assets.ccbp.in/frontend/react-js/reset-icon-img.png)

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #ffffff ; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #cffcf1 ; width: 150px; padding: 10px; color: black">Hex: #cffcf1</div>
<div style="background-color: #1e293b ; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #0f172a ; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #defafe ; width: 150px; padding: 10px; color: black">Hex: #defafe</div>
<div style="background-color: #00d9f5 ; width: 150px; padding: 10px; color: white">Hex: #00d9f5</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
