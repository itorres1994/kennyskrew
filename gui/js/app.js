var app = angular.module('digitalDash', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider
      .when("/M_UD_DR_SCHED_START_RN_AID", {
          templateUrl: "M_UD_DR_SCHED_START_RN_AID.html",
          controller: "scheduleStartTime"
      })
      .when("/M_UD_DR_SCHED_STTS_RN_AID", {
          templateUrl: "M_UD_DR_SCHED_STTS_RN_AID.html",
          controller: "statusCode"
      })
      .when("/M_UD_DR_SCHED_VAL_END_RN_AID", {
          templateUrl: "M_UD_DR_SCHED_VAL_END_RN_AID.html",
          controller: "valuationEnd"
      })
      .when("/M_UD_DR_SCHED_VAL_START_RN_AID", {
          templateUrl: "M_UD_DR_SCHED_VAL_START_RN_AID.html",
          controller: "valuationStart"
      })
      .when("/M_UD_DR_SCHED_SLA_AID", {
          templateUrl: "M_UD_DR_SCHED_SLA_AID.html",
          controller: "sla_by_audit"
      })
      .when("/M_UD_DR_SCHED_SLA_RN", {
          templateUrl: "M_UD_DR_SCHED_SLA_RN.html",
          controller: "sla_by_runname"
      })
      .when("/M_UD_DR_SCHED_H_SLA_RN", {
          templateUrl: "M_UD_DR_SCHED_H_SLA_RN.html",
          controller: "histoy_SLA"
      })
      .when("/M_UD_DR_STEP_DTL_RN_GN", {
          templateUrl: "M_UD_DR_STEP_DTL_RN_GN.html",
          controller: "status_name_grpNumder"
      })
      .when("/M_UD_DR_STEP_DTL_RN_STPDTLID", {
          templateUrl: "M_UD_DR_STEP_DTL_RN_STPDTLID.html",
          controller: "status_name_dtlID"
      })
      .when("/M_UD_DR_STEP_ASI_SID", {
          templateUrl: "M_UD_DR_STEP_ASI_SID.html",
          controller: "active_step_indicator_stepID"
      })
      .when("/M_UD_DR_STEP_ASI_RN_SID", {
          templateUrl: "M_UD_DR_STEP_ASI_RN_SID.html",
          controller: "active_step_indicator_runName_stepID"
      })
      .when("/M_UD_DR_STEP_ASI_RN", {
          templateUrl: "M_UD_DR_STEP_ASI_RN.html",
          controller: "active_step_indicator_runName"
      })
      .when("/M_UD_DR_STEP_ASI_RN_GN", {
          templateUrl: "M_UD_DR_STEP_ASI_RN_GN.html",
          controller: "active_step_indicator_runName_grpNumber"
      })
      //route for ADD
      .when("/AddDriverSchedule", {
          templateUrl: "addDriverScedule.html",
          controller: "Add_Driver_Schedule"
      })
      .when("/AddDriverStep", {
          templateUrl: "addDriverStep.html",
          controller: "Add_Driver_Step"
      })
      //route for DELETE
      .when("/M_DL_DR_SCHED_RN", {
          templateUrl: "M_DL_DR_SCHED_RN.html",
          controller: "Dl_Driver_Schedule"
      })
      .when("/M_DL_DR_STEP_RN_GN", {
          templateUrl: "M_DL_DR_STEP_RN_GN.html",
          controller: "Dl_Driver_Step_RunName_GrpNbr"
      })
      .when("/M_DL_DR_STEP_RN", {
          templateUrl: "M_DL_DR_STEP_RN.html",
          controller: "Dl_Driver_Step_RunName"
      })
      .when("/M_DL_DR_STEP_RN_SID", {
          templateUrl: "M_DL_DR_STEP_RN_SID.html",
          controller: "Dl_Driver_Step_RunName_Sid"
      })
      .when("/M_DL_DR_STEP_DTL_RN", {
          templateUrl: "M_DL_DR_STEP_DTL_RN.html",
          controller: "Dl_Driver_Step_Detail_RunName"
      })
      //route for ADD

      //route for view logs
      .when("/Logs", {
          templateUrl: "viewlog.html",
          controller: ""
      })
      //route for peer review
      .when("/PeerReview", {
          templateUrl: "peerreview.html",
          controller: ""
      })


  }]);
