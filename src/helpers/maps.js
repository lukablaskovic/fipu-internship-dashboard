class StudentMappings {
  static year_of_study = [
    { id: 1, label: "3. prijediplomski", dbLabel: "3_prijediplomski" },
    { id: 2, label: "1. diplomski", dbLabel: "1_diplomski" },
    { id: 3, label: "2. diplomski", dbLabel: "2_diplomski" },
  ];

  static getYearOfStudyLabel(dbLabel) {
    const year = this.year_of_study.find((year) => year.dbLabel === dbLabel);
    return year ? year.label : dbLabel;
  }
}

import Student_ChooseAvailableAssignments from "@/components/Internship/Student_ChooseAvailableAssignments.vue";
import Student_WaitingForAllocation from "@/components/Internship/Student_WaitingForAllocation.vue";

class UserTaskMappings {
  static tasks = [
    {
      _id: "odabiranje_zadatka_student",
      name: "Mora odabrati zadatke",
      form_title: "Odabrani zadaci",
      bpmn_task_color: "#79d4f2",
      component: Student_ChooseAvailableAssignments,
    },
    {
      _id: "potvrda_alociranja_profesor",
      name: "Čeka alokaciju",
      form_title: "Potvrda alokacije",
      bpmn_task_color: "#e25555",
      component: Student_WaitingForAllocation,
    },
    { _id: "evaluacija_poslodavac", name: "Čeka evaluaciju poslodavca" },
    {
      _id: "ispunjavanje_prijavnice_student",
      name: "Mora ispuniti prijavnicu",
    },
    { _id: "predavanje_dnevnika_student", name: "Mora predati dnevnik prakse" },
  ];

  static getTaskName(taskId) {
    const task = this.tasks.find((task) => task._id === taskId);
    return task ? task.name : taskId;
  }
  static getComponent(taskId) {
    const task = this.tasks.find((task) => task._id === taskId);
    return task ? task.component : null;
  }
  static getBpmnTaskColor(taskId) {
    const task = this.tasks.find((task) => task._id === taskId);
    return task ? task.bpmn_task_color : null;
  }
}

export { StudentMappings, UserTaskMappings };
