<script lang="ts">
    import type { JobItem } from "../models";
    export let job: JobItem;
</script>

<div class="job-item">
    <p>Job Title: <strong>{job.job_title}</strong></p>
    <p>Description: <strong>{job.job_description}</strong></p>
    <div class="job-details">
        <span>Company Name: <strong>{job.company_name}</strong></span>
        <span>Compensation /yr: <strong>{job.compensation_per_year}</strong></span>
    </div>
</div>

<style>
    .job-item {
        border: 1px solid grey;
        padding: 2rem;
        width: 50%;
        margin: 1rem;
        border-radius: 10px;
    }

    .job-details {
        display: flex;
        justify-content: space-between;
    }
</style>
