export function ToggleName(state, i) {
    let ReportGroups = document.getElementsByClassName("ReportGroups");
    if (state === true) {
        ReportGroups[i].classList.add("ActiveReportGroups");
    }
    else if (state === false) {
        for (let x = 0; x < ReportGroups.length; x++) {
            ReportGroups[x].className = "ReportGroups";
        }
    }
}