import * as fs from 'fs';
import * as core from '@actions/core';

const yaml = require('js-yaml');

interface Config {
  working_directory_file: string | undefined
  target_groups: Array<TargetConfig>
}

interface TargetConfig {
  target: string
  working_directory: string
  aws_region: string
  s3_bucket_name_plan_file: string
  s3_bucket_name_tfmigrate_history: string
  template_dir: string
  gcs_bucket_name_plan_file: string

  aws_assume_role_arn: string | undefined
  gcp_service_account: string | undefined
  gcp_workload_identity_provider: string | undefined
  environment: object | string | undefined
  secrets: object | undefined
  runs_on: string | undefined

  terraform_plan_config: JobConfig | undefined
  tfmigrate_plan_config: JobConfig | undefined
  terraform_apply_config: JobConfig | undefined
  tfmigrate_apply_config: JobConfig | undefined
}

export interface JobConfig {
  aws_assume_role_arn: string | undefined
  gcp_service_account: string | undefined
  gcp_workload_identity_provider: string | undefined
  environment: object | string | undefined
  secrets: object | undefined
  runs_on: string | undefined
}

export function getConfig(): Config {
  const configFilePath = process.env.TFACTION_CONFIG ? process.env.TFACTION_CONFIG : 'tfaction-root.yaml';
  return yaml.load(fs.readFileSync(configFilePath, 'utf8'));
}

export function readTargetConfig(p: string): TargetConfig {
  return yaml.load(fs.readFileSync(p, 'utf8'));
}

export function getTarget(): string {
  const target = process.env.TFACTION_TARGET;
  if (target == '' || target == undefined) {
    throw 'the environment variable TFACTION_TARGET is required';
  }
  return target;
}

export function getIsApply(): boolean {
  return process.env.TFACTION_IS_APPLY == 'true'
}

export function getJobType(): string {
  if (process.env.TFACTION_JOB_TYPE == undefined) {
    throw 'environment variable TFACTION_JOB_TYPE is required';
  }
  return process.env.TFACTION_JOB_TYPE;
}

export function getJobConfig(config: TargetConfig | undefined, isApply: boolean, jobType: string): JobConfig | undefined {
  if (config == undefined) {
    return undefined;
  }
  if (isApply) {
    switch (jobType) {
      case 'terraform':
        return config.terraform_apply_config;
      case 'tfmigrate':
        return config.tfmigrate_apply_config;
      default:
        throw `unknown type: ${jobType}`;
    }
  }
  switch (jobType) {
    case 'terraform':
      return config.terraform_plan_config;
    case 'tfmigrate':
      return config.tfmigrate_plan_config;
    default:
      throw `unknown type: ${jobType}`;
  }
}

export function setValue(name: string, values: Array<any>) {
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (value != undefined) {
      core.setOutput(name, value);
      return;
    }
  }
}

export function setOutputs(keys: Array<string>, objs: Array<any>) {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    for (let j = 0; j < objs.length; j++) {
      const obj = objs[j];
      if (obj != undefined && obj != null && obj[key] != undefined) {
        core.setOutput(key, obj[key]);
        break;
      }
    }
  }
}
