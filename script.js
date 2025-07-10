const jobName = document.getElementById("jobName");
const rows = document.getElementById("rows");
let count = 0;
document.getElementById("button").addEventListener("click", function() {
    count++;
    const li = document.createElement("li");
    const button = document.createElement("button");
    rows.appendChild(li);
    li.textContent = `công việc ${count}: ` + jobName.value;
    li.appendChild(button);
    button.textContent = `xóa`;
    button.onclick = () => li.remove();
})
