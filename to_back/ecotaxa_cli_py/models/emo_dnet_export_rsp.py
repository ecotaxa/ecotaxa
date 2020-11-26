# coding: utf-8

"""
    EcoTaxa

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 0.0.5
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from to_back.ecotaxa_cli_py.configuration import Configuration


class EMODnetExportRsp(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'errors': 'list[str]',
        'warnings': 'list[str]',
        'task_id': 'int'
    }

    attribute_map = {
        'errors': 'errors',
        'warnings': 'warnings',
        'task_id': 'task_id'
    }

    def __init__(self, errors=[], warnings=[], task_id=0, local_vars_configuration=None):  # noqa: E501
        """EMODnetExportRsp - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._errors = None
        self._warnings = None
        self._task_id = None
        self.discriminator = None

        if errors is not None:
            self.errors = errors
        if warnings is not None:
            self.warnings = warnings
        if task_id is not None:
            self.task_id = task_id

    @property
    def errors(self):
        """Gets the errors of this EMODnetExportRsp.  # noqa: E501


        :return: The errors of this EMODnetExportRsp.  # noqa: E501
        :rtype: list[str]
        """
        return self._errors

    @errors.setter
    def errors(self, errors):
        """Sets the errors of this EMODnetExportRsp.


        :param errors: The errors of this EMODnetExportRsp.  # noqa: E501
        :type: list[str]
        """

        self._errors = errors

    @property
    def warnings(self):
        """Gets the warnings of this EMODnetExportRsp.  # noqa: E501


        :return: The warnings of this EMODnetExportRsp.  # noqa: E501
        :rtype: list[str]
        """
        return self._warnings

    @warnings.setter
    def warnings(self, warnings):
        """Sets the warnings of this EMODnetExportRsp.


        :param warnings: The warnings of this EMODnetExportRsp.  # noqa: E501
        :type: list[str]
        """

        self._warnings = warnings

    @property
    def task_id(self):
        """Gets the task_id of this EMODnetExportRsp.  # noqa: E501


        :return: The task_id of this EMODnetExportRsp.  # noqa: E501
        :rtype: int
        """
        return self._task_id

    @task_id.setter
    def task_id(self, task_id):
        """Sets the task_id of this EMODnetExportRsp.


        :param task_id: The task_id of this EMODnetExportRsp.  # noqa: E501
        :type: int
        """

        self._task_id = task_id

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, EMODnetExportRsp):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, EMODnetExportRsp):
            return True

        return self.to_dict() != other.to_dict()