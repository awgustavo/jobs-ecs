docker build -t job_example  .   
docker tag job_example:latest 157233251312.dkr.ecr.us-west-2.amazonaws.com/job_example:latest
docker push 157233251312.dkr.ecr.us-west-2.amazonaws.com/job_example:latest 